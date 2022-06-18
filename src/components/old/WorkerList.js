import React, { useState } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default function WorkerList(props) {
    const [workers, setWorkers] = useState([
        { id: 1, desc: "Cras justo odio" },
        { id: 2, desc: "Dapibus ac facilisis in" },
        { id: 3, desc: "Morbi leo risus" },
        { id: 4, desc: "Porta ac consectetur ac" },
        { id: 5, desc: "Vestibulum at eros" },
    ])
    return (
        <div>
            <ListGroup>
                <ListGroupItem
                    disabled
                    href="#"
                    tag="a"
                    style={{ "font-weight": "bold" }}
                >
                    {props.title}
                </ListGroupItem>

                {
                    workers.map(work => (
                        <ListGroupItem
                            key={work.id}
                            href="#"
                            tag="a"
                            style={{ "cursor": "pointer" }}
                        >
                            {work.desc}
                        </ListGroupItem>
                    ))
                }

            </ListGroup>
        </div>
    )
}
