// const heading = React.createElement('h1', { id: 'heading' }, 'hello'); //creates an object
const root = ReactDOM.createRoot(document.getElementById('root')); //creates a root instance
// root.render(heading);  //takes object and create h1 tag and put inside root

const parent = React.createElement('div', { id: 'parent' },
  React.createElement('div', { id: 'child' },
    [React.createElement('h1', { id: 'heading2' }, 'hi'
    ),
    React.createElement('h2', { id: 'heading3' }, 'hi')
    ]
  )
)

root.render(parent)