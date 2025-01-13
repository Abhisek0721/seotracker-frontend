import { useState } from "react";
import AddDomain from "../components/AddDomain";
import DomainList from "../components/DomainList";

const DomainListPage = () => {
  const [domainAddedName, setDomainAddedName] = useState("")
  return (
    <div className="heading1">
      <div>
        <AddDomain setDomainAddedName={setDomainAddedName} />
      </div>
      <DomainList domainAddedName={domainAddedName}/>
    </div>
  );
};

export default DomainListPage;
