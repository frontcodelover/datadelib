import logo from "./logo.svg";
import "./App.css";
import react, { useState, useEffect } from "react";
import MyCharts from "./MyCharts";

function App() {
  const [myData, setMyData] = useState([]);
  const [fields, setFields] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [myDateFormat, setMyDataFormat] = useState([]);

  //https://data.eurelien.fr/api/records/1.0/search/?dataset=deliberations_cd28_2022&q=&rows=500&facet=delib_date&facet=delib_matiere_nom&facet=budget_nom&facet=nature_acte

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://data.eurelien.fr/api/records/1.0/search/?dataset=deliberations_cd28_2022&q=&rows=500&facet=delib_date&facet=delib_matiere_nom&facet=budget_nom&facet=nature_acte"
      );
      const response = await data.json();
      setMyData(response.records.map((r) => r.fields.delib_date));
      setFields(response.facet_groups);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("MYDATA", myData);

  return (
    <div className="App">
      {!isLoading && (
        <>
          <MyCharts dateData={myData} />
        </>
      )}
    </div>
  );
}

export default App;
