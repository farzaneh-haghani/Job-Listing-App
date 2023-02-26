import data from "./data.json";
import Button from "./Button";

const JobListingCard = () => (
  <>
    {data.map((eachCard) => (
      <div className="card">
        <div className="wrapper">
          <div>
            <img src={eachCard.logo} alt="" />
          </div>
          <div className="">
            <span>{eachCard.company}</span>
            {eachCard.new && <Button class="new" text="NEW!" />}
            {eachCard.featured && <Button class="featured" text="FEATURED" />}
            <p>{eachCard.position}</p>
            <p>
              <span>{eachCard.postedAt}</span>
              <span>{eachCard.contract}</span>
              <span>{eachCard.location}</span>
            </p>
          </div>
        </div>
        <div>
          <Button class="" text={eachCard.role} />
          <Button text="eachCard.level" />
          {eachCard.languages.map((eachLan) => (
            <Button text={eachLan} />
          ))}
        </div>
      </div>
    ))}
  </>
);

export default JobListingCard;
