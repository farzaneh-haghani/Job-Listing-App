import data from "./data.json";
import Button from "./Button";
import Span from "./Span";

const JobListingCard = () => (
  <>
    {data.map((eachCard) => (
      <div className="card">
        <div className="wrapper">
          <div>
            <img src={eachCard.logo} alt="" />
          </div>
          <div className="">
            <Span class="company" text={eachCard.company} />
            {eachCard.new && <Button class="new" text="NEW!" />}
            {eachCard.featured && <Button class="featured" text="FEATURED" />}
            <p className="position">{eachCard.position}</p>
            <p>
              <Span class="info-span" text={eachCard.postedAt} />
              <Span class="info-span" text="." />
              <Span class="info-span" text={eachCard.contract} />
              <Span class="info-span" text="." />
              <Span class="info-span" text={eachCard.location} />
            </p>
          </div>
        </div>
        <div>
          <Button class="role-btn" text={eachCard.role} />
          <Button class="role-btn" text={eachCard.level} />
          {eachCard.languages.map((eachLan) => (
            <Button class="role-btn" text={eachLan} />
          ))}
        </div>
      </div>
    ))}
  </>
);

export default JobListingCard;
