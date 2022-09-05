import { useEffect, useContext} from 'react';
import { Context as PokeContext } from '../../Context/dataContext';


import { Breadcrumb, Layout } from 'antd';
import Cards from '../Card/Card';
const { Header, Content, Footer } = Layout;


const Placement = () => {

  // const { filterPokemonData } = useContext(PokeContext);

  // useEffect(() => {
  //     filterPokemonData(
  //       {
  //         category:"pokemon?",
  //         parameter:"limit=30&offset=0",
  //         onAwait:() => console.log('on Await'),
  //         onSuccess:() => {

  //         },
  //         onReject :(error) => {
  //           console.log(error);
  //         }
  //       }
  //     );
  // },[]);

    return (
    <Layout
    style={{
      minHeight: '100vh',
    }}
  >
    <Header
        style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "middle",
                }}
      >
          <h1 style={{ 
          color: 'WHITE',
          fontFamily: 'Pokemon Solid',
          fontSize: '5vh'
          }}>POKEDEX</h1>
          <img style={{ maxWidth: 60, maxHeight: 60 }}
                src={`poke.gif`} />
    </Header>
    <Content
        style={{
          padding: '10px 10px 10px 10px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '5px 5px 5px 5px',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>Pokemon</Breadcrumb.Item>
        </Breadcrumb>
      <Cards/>
    </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Created by Muhammad Shobir Abdussyakur
      </Footer>
    </Layout>
  )
}
export default Placement;