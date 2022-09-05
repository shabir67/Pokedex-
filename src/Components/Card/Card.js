import {useContext, useEffect, useState} from 'react';
import { Card, Col, InputNumber, Row, Slider } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';

//context 
import { Context as PokeContext } from '../../Context/dataContext'

const Cards = () => {

  const { state, filterPokemonData } = useContext(PokeContext);
  const [cardData, setCardData] = useState([]);
  const [inputValue, setInputValue] = useState(1);
  const [loading, setLoading] = useState(true);

  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  const renderList = cardData? cardData.map((cardData, index) => 
      <Col className='gutter-row' xs={24} sm={24} md={6} lg={4} xl={4} key={index}>
            <Card
              style={{minHeight: 300, maxHeight:300}}
              hoverable
              cover={<img alt={cardData.name} style={{ maxWidth: 220, maxHeight: 220 }}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${index+1}.gif`} />}
              title={cardData.name} description="www.instagram.com"
              >
            </Card>
      </Col>
):<>No Data</>;

  useEffect(() => {
      setCardData(state.filteredPokemonData.results);
  },[state])

  useEffect(() => {
    filterPokemonData(
      {
        category:"pokemon?",
        parameter:`limit=${inputValue}&offset=0`,
        onAwait:() => console.log('on Await'),
        onSuccess:() => {

        },
        onReject :(error) => {
          console.log(error);
        }
      }
    );
},[inputValue]);

  return (
    <>
    <Layout
       style={{
        minHeight: '100vh',
      }}
    >
      <Content>
        <Card>
        <Row gutter={[24, 24]}>
        <Col className='gutter-row' xs={14} sm={14} md={12} lg={18} xl={18}>
        <Slider
          min={1}
          max={1154}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col className='gutter-row' xs={4} sm={4} md={12} lg={6} xl={6}>
        <InputNumber
          min={1}
          max={20}
          style={{
            margin: '0 16px',
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
        {renderList}
        </Row>
        </Card>
      </Content>
    </Layout>
    </>
  )
}

export default Cards
