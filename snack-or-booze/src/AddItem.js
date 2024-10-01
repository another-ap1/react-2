import React, {useState} from "react";
import {Button,
        Form,
        FormGroup,
        Label,
        Input,
        Card,
        CardBody,
        CardTitle,
        CardText} from "reactstrap";

const AddItem = ({addItem, type}) => {
    const INITIAL_VALUES = {
        name:"",
        description:"",
        recipe:"",
        serve:""
    }
    const [formData, setFormData] = useState(INITIAL_VALUES);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
          ...data,
          [name]: value
        }));
      };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await addItem(formData, type);
        setFormData(INITIAL_VALUES);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    };
    
      return (
        <div>
        <Card>
            <CardBody>
                <CardTitle className="font-weight-bold text-center">
                    {type}
                </CardTitle>
                <CardText className="font-italic">Add a new {type} to the menu</CardText>
                <Form onSubmit={handleSubmit}>
                <FormGroup>
                <Label for="name">Name</Label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                </FormGroup>
    
                <FormGroup>
                <Label for="description">Description</Label>
                <Input
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                </FormGroup>
    
                <FormGroup>
                <Label for="recipe">Recipe</Label>
                <Input
                    type="text"
                    name="recipe"
                    id="recipe"
                    value={formData.recipe}
                    onChange={handleChange}
                    required
                />
                </FormGroup>
    
                <FormGroup>
                <Label for="serve">Serve</Label>
                <Input
                    type="text"
                    name="serve"
                    id="serve"
                    value={formData.serve}
                    onChange={handleChange}
                    required
                />
                </FormGroup>
                
                {/* hidden input field to store the type of item */}
                <FormGroup hidden>
                    <Label for="type">Type</Label>
                    <Input
                        type="text"
                        name="type"
                        id="type"
                        value={type}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
    
                <br />
    
                <Button type="submit" color="primary">Add Item</Button>
            </Form>
            </CardBody>
    
        </Card>
          
        </div>
      );
}

export default AddItem;