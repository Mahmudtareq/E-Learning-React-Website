import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './ShowCourse.css';

const ShowCourse = (props) => {
    const { name, img, title, instructor, free } = props.course;
    // console.log(props);
    return (

        <div className="my-2">
            <div className="g-4">
                <Card className="g-4 m-2 shadow">
                    <div>
                        <Card.Img variant="top" src={img} />
                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p>{instructor}</p>
                        <p className="text-primary fs-3">Price : {free}</p>
                        <Card.Text className="justify">
                            {title}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="btn btn-success">Buy Now</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
};

export default ShowCourse;