import React, { useEffect, useState } from 'react'
import BlockData from './block/BlockData'
import styled from 'styled-components'
import ChartContainer from './charts/ChartContainer'
import { useQuery } from '@tanstack/react-query'

export default function Main() {
	const [myData, setMyData] = useState([])

	const { isLoading, data } = useQuery({
		queryKey: ['fetchTest'],
		queryFn: async () => {
			const dataFetch = await fetch(
				'https://data.eurelien.fr/api/records/1.0/search/?dataset=deliberations_cd28_2022&rows=500&sort=delib_date&facet=delib_date&facet=delib_matiere_nom&facet=budget_nom&facet=nature_acte',
			)
			const response = await dataFetch.json()
			return response
		},
	})

	useEffect(() => {
		!isLoading && setMyData(data.records.map((r) => r.fields.publication_date))
	}, [isLoading, data?.records])

	return (
		<>
			{!isLoading && (
				<>
					<Section>
						<BlockData
							bgColor="#ffcc40"
							color="#fffcf6"
							data={data.nhits}
							type={"Nombre d'acte"}
						/>
						<BlockData
							bgColor="#d6c4ff"
							color="#783EFD"
							data={data?.facet_groups[2].facets[1].count}
							type={data?.facet_groups[2].facets[1].name}
						/>
						<BlockData
							bgColor="#ffd2c2"
							color="#FE8F66"
							data={data?.facet_groups[2].facets[0].count}
							type={data?.facet_groups[2].facets[0].name}
						/>
					</Section>
					<ChartContainer myData={myData}></ChartContainer>
				</>
			)}
		</>
	)
}

const Section = styled.section`
	display: flex;
	gap: 30px;
	padding: 50px;
`
