import { Fragment } from "react";
import { Form, FormGroup,Label,Input,Button } from "reactstrap";

const AddTodo=()=>{
    return (
        <Fragment>
            <Form>
                <h3 className="text-center my-2">ADD TODO</h3>
                <FormGroup>
                    <Label for="userId">Email</Label>
                    <Input id="userId" name="userId" placeholder="Write email here" 
                        type="email"/>
                </FormGroup>

                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input id="title" name="title" placeholder="Write title here" 
                        type="text"/>
                </FormGroup>

                <FormGroup>
                    <Label for="desc">Description</Label>
                    <Input id="desc" name="desc" placeholder="Write description here" 
                        type="textarea"
                        style={{height:200}}/>
                </FormGroup>
                <Button color="success">ADD</Button>
                <Button className="mx-2" color="danger">CLEAR</Button>
            </Form>
        </Fragment>
    )
}

export default AddTodo;