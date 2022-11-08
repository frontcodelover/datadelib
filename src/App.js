import "./App.css";
import react, { useState, useEffect } from "react";
import { Charts } from "./Charts";
import Sidebar from "./Sidebar";
import Main from "./components/layout/main/main";
import styled from "styled-components";

function App() {
 

  return (
    <div className="App">

        <Grid>
          {/* <Charts dateData={myData} /> */}
          <Container>
            <SideBarStyle>
              <Sidebar />
            </SideBarStyle>
          </Container>
          <div>
            <Main/>
          </div>
        </Grid>

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
