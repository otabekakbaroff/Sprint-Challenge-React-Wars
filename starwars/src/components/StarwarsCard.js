import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Card, Icon, Image} from 'semantic-ui-react';


export default function StarwarsCard(props){
    console.log(props.item);
    return (
        <div>
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header><h1>{props.item.name}</h1></Card.Header>
                <Card.Meta>
                        <span className='date'>Height: {props.item.height}</span>
                </Card.Meta>
                <Card.Description>
                    Mass: {props.item.mass}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {props.item.gender}
                </a>
                </Card.Content>
            </Card>
        </div>
    )
}