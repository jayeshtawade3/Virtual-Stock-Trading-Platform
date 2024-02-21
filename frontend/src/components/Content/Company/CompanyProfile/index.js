import "./style.css";

const CompanyProfile = ({ data }) => {
  return (
    <div className="company-profile">
      <div className="profile__inner">
        <div className="industry">
          <div className="profile-item">
            <p>Sector</p>
            <p>{data.sector ? data.sector : "--"}</p>
          </div>
          <div className="profile-item">
            <p>Industry</p>
            <p>{data.industry ? data.industry : "--"}</p>
          </div>
        </div>
        <div className="corporate">
          <div className="profile-item">
            <p>Headquarters</p>
            <p>
              {data.city && data.state ? `${data.city}, ${data.state}` : "--"}
            </p>
          </div>
          <div className="profile-item">
            <p>Address</p>
            <p>{data.address ? data.address : "--"}</p>
          </div>
          <div className="profile-item">
            <p>CEO</p>
            <p>{data.CEO ? data.CEO : "--"}</p>
          </div>
          <div className="profile-item">
            <p>Employees</p>
            <p>
              {data.employees ? data.employees.toLocaleString("en-US") : "--"}
            </p>
          </div>
          <div className="profile-item">
            <p>Website</p>
            <p>{data.website ? data.website : "--"}</p>
          </div>
        </div>
      </div>
      {/* <table>
        <tbody>
          <tr>
            <th>Sector</th>
            <td>{data.sector ? data.sector : "--"}</td>
          </tr>
          <tr>
            <th>Industry</th>
            <td>{data.industry ? data.industry : "--"}</td>
          </tr>
          <tr>
            <th>CEO</th>
            <td>{data.CEO ? data.CEO : "--"}</td>
          </tr>
          <tr>
            <th>Employees</th>
            <td>
              {data.employees ? data.employees.toLocaleString("en-US") : "--"}
            </td>
          </tr>
          <tr>
            <th>Headquarters</th>
            <td>
              {data.city && data.state ? `${data.city}, ${data.state}` : "--"}
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default CompanyProfile;
