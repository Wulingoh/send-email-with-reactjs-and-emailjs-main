import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardWithHeader = (props) => {
  return (
    <div className='container'>
      <h2>{props.maintitle}</h2>
      <Card>
        <Card.Header>{props.sectiontitle}</Card.Header>
        <Card.Body>
          <Card.Title>{props.q1}</Card.Title>
          <Card.Text>
            <textarea
              type='text'
              className='form-control'
              id='inputmessage4'
              name={props.q1name}
            />
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>{props.q2}</Card.Title>
          <Card.Text>
            <textarea
              type='text'
              className='form-control'
              id='inputmessage4'
              name={props.q2name}
            />
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>{props.q3}</Card.Title>
          <Card.Text>
            <textarea
              type='text'
              className='form-control'
              id='inputmessage4'
              name={props.q3name}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardWithHeader;
