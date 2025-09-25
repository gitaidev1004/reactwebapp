import { NavLink } from "react-router-dom";

export default function MultiLevelNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/reports" className={({ isActive }) => isActive ? "active" : ""}>
            리포트
          </NavLink>
          <ul>
            <li>
              <NavLink to="/reports/2023" className={({ isActive }) => isActive ? "active" : ""}>
                2023년 리포트
              </NavLink>
            </li>
            <li>
              <NavLink to="/reports/2024" className={({ isActive }) => isActive ? "active" : ""}>
                2024년 리포트
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
