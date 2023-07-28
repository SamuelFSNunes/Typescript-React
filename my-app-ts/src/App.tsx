import {Layout} from './components/Layout'
import {Card} from './components/Card'

function App() {
  return (
    <Layout>
      Hello World
      <Card 
      id={1}
      paragraph='TypeScript' 
      details='TS para front-end e back-end'
      />

      <Card 
      id={2} 
      paragraph='HTML'
      details='HTML para front-end'
      />

      <Card 
      id={3} 
      paragraph='SQL'
      details='SQL para banco de dados'
      />
    </Layout>
  );
}

export default App;
