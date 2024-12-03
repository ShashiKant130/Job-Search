import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export default function Job({ job }) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <img className="d-none d-md-block" width="80" height="80" alt={job?.employer_name} src={job?.employer_logo} />

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Card.Title>

                  {job?.job_title}
                  {job?.employer_name}
                </Card.Title>

                <Card.Title>
                  {job?.employer_name}
                </Card.Title>
              </div>

            </div>
            <Badge variant="secondary" className="mr-2 mt-4 mb-3">{(job?.job_employment_type).toLowerCase()}</Badge>
            <Badge variant="secondary" className="mb-3">{job?.job_city ? job?.job_city : 'Not mentioned'}</Badge>

            <Card.Text>
              Click these links to apply
            </Card.Text>
            <div style={{ wordBreak: 'break-all' }}>
              {job?.apply_options.map((applyOption) => (
                <ReactMarkdown source={applyOption?.apply_link} />
              ))
              }
            </div>
          </div>
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="primary"
          >
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job?.job_description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  )
}
