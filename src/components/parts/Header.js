import React, { Component } from "react";
// import { Menu } from "semantic-ui-react";
import { Image, Dropdown, Menu, 
    // Divider
    } from "semantic-ui-react";
import NewModal from "../elements/NewModal";
import LoadModal from "../elements/LoadModal";

// import fs from "fs";
// import DB from "../../classes/DB.js";

export default class MenuExampleHeader extends Component {

    // state = {};

    constructor (props) {
        super(props)

        this.state = {

        }

        this.saveProjects = this.saveProjects.bind(this);
    }
    
    // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    saveProjects = () => {

    }

    render() {
        // const { activeItem } = this.state;
        // let saveProjects = DB.saveProjects();

        return (
        <Menu attached="top">
            {/* <Menu inverted> */}
            <Dropdown item text="File">
                <Dropdown.Menu>
                    
                    <NewModal />
                    <Dropdown.Item 
                        // as='button'
                        // href="#"
                        // onClick={DB.saveProjects}
                        onClick={this.saveProjects}
                    >Save</Dropdown.Item>

                    <LoadModal projects={this.props.projects}/>
                    {/* <Dropdown.Item>Load</Dropdown.Item> */}
                    <Dropdown.Divider />
                    <Dropdown.Header>Export</Dropdown.Header>
                    <Dropdown.Item>Share</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* <Dropdown item text="Project">
            <Dropdown.Menu>
                <Dropdown.Item>Add Drum Track</Dropdown.Item>
                <Dropdown.Item>Add MIDI Track</Dropdown.Item>
                <Dropdown.Item>Add Audio Track</Dropdown.Item>
                <Dropdown.Item>Add Audio Input</Dropdown.Item>
                <Dropdown.Item>Add Return</Dropdown.Item>
                <Dropdown.Item>Add Scene</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Settings</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown> */}

            {/* <Dropdown item text="Track">
            <Dropdown.Menu>
                <Dropdown.Item>Add Clip</Dropdown.Item>
                <Dropdown.Item>Add Channel</Dropdown.Item>
                <Dropdown.Item>Load</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown> */}
        
            <Menu.Item
            name="Help"
            as="a"
            href="https://github.com/xLeDocteurx/REACT---Black-Beat"
            target="_BLANK"
            // position="right"
            // active={activeItem === "Help"}
            onClick={this.handleItemClick}
            />

            <Menu.Item 
            // className="centered" 
                header>{this.props.currentProject.title}
            </Menu.Item>

            <Menu.Item
            as="a"
            href="#"
            // onClick=""
            position="right">
                <Image src={this.props.currentUser.avatar} alt="User Avatar" avatar />
                <span>{this.props.currentUser.username}</span>
            </Menu.Item>
        </Menu>
        );
    }
}
