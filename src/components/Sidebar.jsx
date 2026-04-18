import SpecialDeal from "./SpecialDeal";
import "../styles/Sidebar.css";

function Sidebar() {
return (
    <>
    <div className="filters-container">
        <p>Filters</p>
        </div>
        <div className="special-deal">
            <SpecialDeal />
        </div>
    </>
)
}

export default Sidebar;