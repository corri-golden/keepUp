import React, { Component } from 'react';
import { Button, Input, Form, FormGroup, Label, FormText } from 'reactstrap';



class HomeDetail extends Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail"></Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Maintenance Issue" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select Car</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Comment</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
            </Form>
        );
    }

}


export default HomeDetail;











