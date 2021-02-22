import { useMemo } from "react";
import { usePagination, useTable } from "react-table";
import Layout from "../../components/Layout";
import spaceX from "../../services/spaceX";
import Link from "next/link";

import dayz from "dayjs";

export default function Launches({ launches, rockets }) {
	const renderRocket = (id) => {
		const rocket = rockets.find((r) => r.id == id);
		return (
			<Link href={`/rockets/${id}?backTo=/launches`}>
				<div className='hover:text-red-500' title={`Go to ${rocket.name} page`}>
					<a className='border-b border-gray-500'>{rocket.name}</a>
				</div>
			</Link>
		);
	};

	const renderLaunchData = (item) => (
		<a
			target='_blank'
			href={item.links.wikipedia}
			title='Go to launch wiki page'
			className='hover:text-red-500'>
			<span className='border-b border-gray-500'>{item.name}</span>
		</a>
	);

	const data = useMemo(
		() =>
			launches.map((item, idx) => ({
				no: idx + 1,
				name: renderLaunchData(item),
				success: item.success ? (
					<span className='text-green-500'>Success</span>
				) : (
					<span className='text-red-500'>Failed</span>
				),
				date: dayz(item.date_utc).format("DD/MM/YYYY-HH:MM"),
				rocket: renderRocket(item.rocket),
			})),
		[]
	);

	const columns = useMemo(
		() => [
			{ Header: "#", accessor: "no" },
			{ Header: "Launch Name", accessor: "name" },
			{ Header: "Launch Date", accessor: "date" },
			{ Header: "Operation", accessor: "success" },
			{ Header: "Rocket", accessor: "rocket" },
		],
		[]
	);

	const instance = useTable({ columns, data }, usePagination);
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		pageOptions,
		pageCount,
		page,
		state: { pageIndex, pageSize },
		gotoPage,
		previousPage,
		nextPage,
		setPageSize,
		canPreviousPage,
		canNextPage,
	} = instance;

	return (
		<Layout title='Launches 🥏' pageTitle='SpaceX - Launches 🥏'>
			<div className='grid w-full place-items-center'>
				<table
					{...getTableProps()}
					className='w-full overflow-auto text-center border-collapse rounded select-none'>
					<thead className='text-xs sm:text-base'>
						{headerGroups.map((hg) => (
							<tr {...hg.getHeaderGroupProps()}>
								{hg.headers.map((col) => (
									<th className='bg-gray-700' {...col.getHeaderProps()}>
										{col.render("Header")}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody className='text-sm sm:text-base' {...getTableBodyProps()}>
						{page.map((row, i) => {
							prepareRow(row);
							return (
								<tr
									className='border-b border-gray-500 hover:bg-gray-600 sm:border-none'
									{...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<td className="py-2" {...cell.getCellProps()}>{cell.render("Cell")}</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
				<div className='w-full py-3 mt-5 border border-gray-500 rounded-tr-full rounded-bl-full'>
					<section className='flex justify-center space-x-3'>
						<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
							{"<<"}
						</button>
						<button onClick={() => previousPage()} disabled={!canPreviousPage}>
							{"<"}
						</button>
						<button onClick={() => nextPage()} disabled={!canNextPage}>
							{">"}
						</button>
						<button
							onClick={() => gotoPage(pageCount - 1)}
							disabled={!canNextPage}>
							{">>"}
						</button>
					</section>

					<section className='flex justify-center space-x-3'>
						<div>
							<span>
								Page{" "}
								<strong>
									{pageIndex + 1} of {pageOptions.length}
								</strong>{" "}
							</span>
						</div>
						<div>
							<select
								className='bg-transparent'
								value={pageSize}
								onChange={(e) => {
									setPageSize(Number(e.target.value));
								}}>
								{[10, 20, 30, 40, 50].map((pageSize) => (
									<option
										className='bg-gray-700'
										key={pageSize}
										value={pageSize}>
										Show {pageSize}
									</option>
								))}
							</select>
						</div>
					</section>
				</div>
			</div>
		</Layout>
	);
}

Launches.getInitialProps = async (ctx) => {
	try {
		const launches = await spaceX.getAllLaunches();
		const rockets = await spaceX.getAllRockets();
		return {
			launches: launches.data,
			rockets: rockets.data,
		};
	} catch (error) {
		console.log(error);
		return { error };
	}
};
