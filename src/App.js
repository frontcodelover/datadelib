import "./App.css";
import react, { useState, useEffect } from "react";
import { Charts } from "./Charts";
import Sidebar from "./Sidebar";
import Main from "./components/layout/main/main";
import styled from "styled-components";

function App() {
  const [myData, setMyData] = useState([]);
  const [fields, setFields] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //https://data.eurelien.fr/api/records/1.0/search/?dataset=deliberations_cd28_2022&q=&rows=500&facet=delib_date&facet=delib_matiere_nom&facet=budget_nom&facet=nature_acte

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

  return (
    <div className="App">
      {!isLoading && (
        <Grid>
          {/* <Charts dateData={myData} /> */}
          <Container>
            <SideBarStyle>
              <Sidebar />
            </SideBarStyle>
          </Container>
          <div>
            <Main />
          </div>
        </Grid>
      )}
    </div>
  );
}

export default App;

const Container = styled.div`
  display: block;
  position: block;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  position: relative;
`;

const SideBarStyle = styled.div`
  background-color: #fff;
  height: 100vh;
  box-shadow: 0px 0px 15px 5px #cfcfcff0;
  color: #1a1e29;
  position: fixed;
  width: 200px;
  padding: 0 70px;
`;
