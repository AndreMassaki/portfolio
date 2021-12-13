import React from 'react';
import MyProjectsWrapper from './styles';
import Text from '../../foundation/Text';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';

export default function MyProjects() {
  return (
    <MyProjectsWrapper
      display="flex"
      flexDirection="column"
    >
      <Text
        tag="h2"
        variant="title2"
        order={{
          xs: '-2',
          md: 'initial',
        }}
        textAlign="center"
        textTransform="uppercase"
      >
        Meus Projetos
      </Text>
      <Grid.Row
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        gap={{
          xs: '2rem',
          md: '3rem',
        }}
        marginBottom={{
          xs: '2rem',
          md: '2rem',
        }}
      >
        <Grid.Col
          offset={{ xs: 1, md: 1.6 }}
          value={{ xs: 8, md: 2 }}
        >
          <Text
            tag="a"
            href="https://instalura-base-andremassaki.vercel.app"
            color="black"
            textDecoration="none"
          >
            <MyProjectsWrapper.Card>
              <MyProjectsWrapper.CardImage
                src="/images/Instalura-Mobile.png"
                width="100%"
              />
              <Text
                tag="h3"
                variant="subTitle2"
                textAlign="center"
              >
                Instalura
              </Text>
            </MyProjectsWrapper.Card>
          </Text>
        </Grid.Col>
        <Grid.Col
          offset={{ xs: 1, md: 0.0000000001 }}
          value={{ xs: 8, md: 2 }}
        >
          <Text
            tag="a"
            href="https://instalura-base-andremassaki.vercel.app"
            color="black"
            textDecoration="none"
          >
            <MyProjectsWrapper.Card>
              <MyProjectsWrapper.CardImage
                src="/images/Instalura-Mobile.png"
                width="100%"
              />
              <Text
                tag="h3"
                variant="subTitle2"
                textAlign="center"
              >
                Instalura
              </Text>
            </MyProjectsWrapper.Card>
          </Text>
        </Grid.Col>
        <Grid.Col
          offset={{ xs: 1, md: 0.0000000001 }}
          value={{ xs: 8, md: 2 }}
        >
          <Text
            tag="a"
            href="https://instalura-base-andremassaki.vercel.app"
            color="black"
            textDecoration="none"
          >
            <MyProjectsWrapper.Card>
              <MyProjectsWrapper.CardImage
                src="/images/Instalura-Mobile.png"
                width="100%"
              />
              <Text
                tag="h3"
                variant="subTitle2"
                textAlign="center"
              >
                Instalura
              </Text>
            </MyProjectsWrapper.Card>
          </Text>
        </Grid.Col>
      </Grid.Row>
      <Text
        tag="a"
        href="https://instalura-base-andremassaki.vercel.app"
        color="black"
        order={{
          xs: '-1',
          md: 'initial',
        }}
        textDecoration="none"
        margin={{
          xs: '0 auto 2rem',
          md: '0 16% 3rem',
        }}
        width={{
          xs: '80%',
          md: 'calc(60% + 6rem)',
        }}
      >
        <MyProjectsWrapper.Card
          display="flex"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
        >
          <Text
            tag="p"
            variant="highlighted"
            backgroundColor="white"
            border="2px solid black"
            margin=".5rem 1rem"
            padding=".3rem 2rem"
            position="absolute"
          >
            Destaque
          </Text>
          <MyProjectsWrapper.CardImage
            src="./images/Instalura-Desktop.png"
            width={{ md: '66.666%' }}
          />
          <Box
            display="flex"
            flexDirection="column"
          >
            <Text
              tag="h3"
              variant="subTitle2"
              margin={{
                xs: '2rem auto',
                md: '2.5rem 0 1.5rem 1rem',
              }}
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Instalura
            </Text>
            <Text
              tag="p"
              variant="paragraph"
              display={{
                xs: 'none',
                md: 'block',
              }}
              margin={{
                xs: '0 0 2rem',
                md: '0 1rem',
              }}
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Projeto desenvolvido durante o bootcamp Frond-end avançado da Alura
            </Text>
          </Box>
        </MyProjectsWrapper.Card>
      </Text>
    </MyProjectsWrapper>
  );
}
