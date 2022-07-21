import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardWithHeader = (props) => {
  return (
    <div
      className='container'
      style={{ backgroundColor: props.bgcolor, padding: "25px" }}
    >
      <h2>{props.maintitle}</h2>
      <Card className='bg-transparent'>
        <Card.Header style={{ fontSize: "1.5em", fontWeight: "bold" }}>
          {props.sectiontitle}
        </Card.Header>
        <Card.Header style={{ fontSize: "1em" }}>
          {props.description}
        </Card.Header>
        <Card.Header style={{ fontSize: "1em" }}>
          {props.description2}
        </Card.Header>
        <Card.Header style={{ fontSize: "1em" }}>
          {props.description3}
        </Card.Header>

        <Card.Body>
          <Card.Text style={{ fontSize: "1.2em" }}>{props.q1}</Card.Text>
          <Card.Text>
            <textarea
              type='text'
              rows='4'
              className='form-control'
              id={props.q1name}
              name={props.q1name}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='bg-transparent'>
        <Card.Body>
          <Card.Text style={{ fontSize: "1.2em" }}>{props.q2}</Card.Text>
          <Card.Text>
            <textarea
              type='text'
              rows='4'
              className='form-control'
              id={props.q2name}
              name={props.q2name}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      {props.q3 != null ? (
        <Card className=' bg-transparent'>
          <Card.Body>
            <Card.Text style={{ fontSize: "1.2em" }}>{props.q3}</Card.Text>
            <Card.Text>
              <textarea
                type='text'
                rows='4'
                className='form-control'
                id={props.q3name}
                name={props.q3name}
              />
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardWithHeader;
