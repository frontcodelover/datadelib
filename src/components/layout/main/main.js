import React, {useEffect, useState} from 'react'
import BlockData from './block/BlockData'
import styled from 'styled-components'
import ChartContainer from './charts/ChartContainer'
import { Charts } from '../../../Charts'

export default function Main() {
	const [myData, setMyData] = useState([]);
	const [fields, setFields] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
		const fetchData = async () => {
			try {
			  const data = await fetch(
				"https://data.eurelien.fr/api/records/1.0/search/?dataset=deliberations_cd28_2022&q=delib_date%3D%222022-10%22&rows=500&sort=delib_date&facet=delib_date&facet=delib_matiere_nom&facet=budget_nom&facet=nature_acte"
			  );
				const response = await data.json();
				setMyData(response.records.map((r) => r.fields.publication_date));
				setFields(response.facet_groups);
				setIsLoading(false);
			} catch (e) {
			  console.log(e);
			}
		  };
		  
		  useEffect(() => {
			  fetchData();
			}, []);
			
			console.log(myData)
	return (
		<>
			{!isLoading && (
			<>
			<Section>
				<BlockData bgColor="#ffcc40" color="#fffcf6" />
				<BlockData bgColor="#d6c4ff" color="#783EFD" />
				<BlockData bgColor="#ffd2c2" color="#FE8F66" />
			</Section>
			<ChartContainer myData={myData}>
				
			</ChartContainer>
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
