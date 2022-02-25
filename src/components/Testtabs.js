import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const tabs = [{
  post: 'General News 1',
  id: 0,
  metadata: {
    authorName: 'Adeel Nazir',
    'createdTime': '12-12-2022',
  },
  comments: [{
      text: 'wow this is cool 1',
      replies: [{
        id: 0,
        text: 'yes this is really cool! 1111',
        replies: [{
          text: 'yes I think its cool 111111111'
        }]
      }],
      id: 0
    },
    {
      text: 'wow this is cool 2',
      replies: [{
        id: 0,
        text: 'yes this is really cool! 222',
        replies: [{
          text: 'yes I think its cool 222222222',
        }]
      }],
      id: 1
    },

  ]
},
{
  post: 'General News 2',
  id: 1,
  metadata: {
    authorName: 'Adeel Nazir',
    'createdTime': '12-12-2022'
  },
  comments: [{
      text: 'wow this is cool 1',
      id: 0,
      replies: [{
        id: 0,
        text: 'yes this is really cool! 1111',
        replies: [{
          text: 'yes I think its cool 111111111'
        }]
      }]
    },
    {
      text: 'wow this is cool 2',
      id: 1,
      replies: [{
        id: 0,
        text: 'yes this is really cool! 222',
        replies: [{
          text: 'yes I think its cool 222222222'
        }]
      }]
    },
  ]
},
{
  post: 'General News 3',
  id: 2,
  metadata: {
    authorName: 'Adeel Nazir',
    'createdTime': '12-12-2022'
  },
  comments: [{
      id: 0,
      text: 'wow this is cool 1',
      replies: [{
        id: 0,
        text: 'yes this is really cool! 1111',
        replies: [{
          text: 'yes I think its cool 111111111'
        }]
      }]
    },
    {
      text: 'wow this is cool 2',
      id: 1,
      replies: [{
        text: 'yes this is really cool! 222',
        replies: [{
          text: 'yes I think its cool 222222222'
        }]
      }]
    },


  ]
},

{
  post: 'General News 4',
  id: 3,
  metadata: {
    authorName: 'Adeel Nazir',
    'createdTime': '12-12-2022'
  },
  comments: [{
      id: 0,
      text: 'wow this is cool 1',
      replies: [{
        id: 0,
        text: 'yes this is really cool! 1111',
        replies: [{
          text: 'yes I think its cool 111111111'
        }]
      }]
    },
    {
      text: 'wow this is cool 2',
id:1,
      replies: [{
         id:0,
        text: 'yes this is really cool! 222',
        replies: [{
          text: 'yes I think its cool 222222222'
        }]
      }]
    },
  ]
},

{
  post: 'General News 5',
   id:4,
  metadata: {
    authorName: 'Adeel Nazir',
    'createdTime': '12-12-2022'
  },
  comments: [{
      text: 'wow this is cool 1',
     id:0,
      replies: [{
         id:0,
        text: 'yes this is really cool! 1111',
        replies: [{
          text: 'yes I think its cool 111111111'
        }]
      }]
    },
    {
       id:1,
      text: 'wow this is cool 2',
      replies: [{
         id:0,
        text: 'yes this is really cool! 222',
        replies: [{
          text: 'yes I think its cool 222222222'
        }]
      }]
    },
  ]
},

{
  post: 'General News 6',
   id:4,
  metadata: {
    authorName: 'Adeel Nazir',
    'createdTime': '12-12-2022'
  },
  comments: [{
      text: 'wow this is cool 1',
     id:0,
      replies: [{
         id:0,
        text: 'yes this is really cool! 1111',
        replies: [{
          text: 'yes I think its cool 111111111'
        }]
      }]
    },
    {
       id:1,
      text: 'wow this is cool 2',
      replies: [{
         id:0,
        text: 'yes this is really cool! 222',
        replies: [{
          text: 'yes I think its cool 222222222'
        }]
      }]
    },
  ]
},

{
  post: 'General News 7',
   id:4,
  metadata: {
    authorName: 'Adeel Nazir',
    'createdTime': '12-12-2022'
  },
  comments: [{
      text: 'wow this is cool 1',
     id:0,
      replies: [{
         id:0,
        text: 'yes this is really cool! 1111',
        replies: [{
          text: 'yes I think its cool 111111111'
        }]
      }]
    },
    {
       id:1,
      text: 'wow this is cool 2',
      replies: [{
         id:0,
        text: 'yes this is really cool! 222',
        replies: [{
          text: 'yes I think its cool 222222222'
        }]
      }]
    },
  ]
},

{
  post: 'General News 8',
   id:4,
  metadata: {
    authorName: 'Adeel Nazir',
    'createdTime': '12-12-2022'
  },
  comments: [{
      text: 'wow this is cool 1',
     id:0,
      replies: [{
         id:0,
        text: 'yes this is really cool! 1111',
        replies: [{
          text: 'yes I think its cool 111111111'
        }]
      }]
    },
    {
       id:1,
      text: 'wow this is cool 2',
      replies: [{
         id:0,
        text: 'yes this is really cool! 222',
        replies: [{
          text: 'yes I think its cool 222222222'
        }]
      }]
    },
  ]
},

{
  post: 'General News 9',
   id:4,
  metadata: {
    authorName: 'Adeel Nazir',
    'createdTime': '12-12-2022'
  },
  comments: [{
      text: 'wow this is cool 1',
     id:0,
      replies: [{
         id:0,
        text: 'yes this is really cool! 1111',
        replies: [{
          text: 'yes I think its cool 111111111'
        }]
      }]
    },
    {
       id:1,
      text: 'wow this is cool 2',
      replies: [{
         id:0,
        text: 'yes this is really cool! 222',
        replies: [{
          text: 'yes I think its cool 222222222'
        }]
      }]
    },
  ]
},

{
  post: 'General News 10',
   id:4,
  metadata: {
    authorName: 'Adeel Nazir',
    'createdTime': '12-12-2022'
  },
  comments: [{
      text: 'wow this is cool 1',
     id:0,
      replies: [{
         id:0,
        text: 'yes this is really cool! 1111',
        replies: [{
          text: 'yes I think its cool 111111111'
        }]
      }]
    },
    {
       id:1,
      text: 'wow this is cool 2',
      replies: [{
         id:0,
        text: 'yes this is really cool! 222',
        replies: [{
          text: 'yes I think its cool 222222222'
        }]
      }]
    },
  ]
}

]

  function Testtabs() {
  return (
    <div className="App">
         <div className="container">
        <Accordion>
          {tabs.map(data =>{
            return(
              <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                     {data.post}
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="row">
                 <div className="col-sm-6 text-start"><p> {data.metadata.authorName}</p></div>
                 <div className="col-sm-6 text-end"><span>{data.metadata.createdTime}</span></div>
                 </div>
              <Accordion>
                 {data.comments.map(UserfeedbackName => {
                        return(
                          <AccordionItem className="text-start">
                          <AccordionItemHeading>
                          <AccordionItemButton>
                             {UserfeedbackName.text}
                          </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              {UserfeedbackName.replies.map(Userinfo => {
                               return(
                                  <span>{Userinfo.text}</span>
                               )
                              })}
                          </AccordionItemPanel>
                          </AccordionItem>
                           )
                       })}
                  </Accordion>
              </AccordionItemPanel>
          </AccordionItem>
            )
          })}
          
        </Accordion>
        </div>

     </div>
  );
}

export default Testtabs
