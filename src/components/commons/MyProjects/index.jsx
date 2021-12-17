import React from 'react';
import { css } from 'styled-components';
import MyProjectsWrapper from './styles';
import Text from '../../foundation/Text';
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
      <Box
        display="flex"
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        justifyContent="center"
        style={{
          flexWrap: 'wrap',
        }}
      >
        <MyProjectsWrapper.Card
          href="https://instalura-base-andremassaki.vercel.app"
          width={{
            xs: '80vw',
            md: '25vw',
          }}
          margin={{
            xs: '1rem auto',
            md: '1rem',
          }}
        >
          <MyProjectsWrapper.CardImage
            src="/images/Instalura-Mobile.png"
            width="100%"
            borderBottom={{
              xs: css`3px solid ${({ theme }) => theme.colors.secondary}`,
            }}
          />
          <Text
            tag="h3"
            variant="subTitle2"
            textAlign="center"
          >
            Instalura
          </Text>
        </MyProjectsWrapper.Card>
        <MyProjectsWrapper.Card
          href="https://instalura-base-andremassaki.vercel.app"
          width={{
            xs: '80vw',
            md: '25vw',
          }}
          margin={{
            xs: '1rem auto',
            md: '1rem',
          }}
        >
          <MyProjectsWrapper.CardImage
            src="/images/Instalura-Mobile.png"
            width="100%"
            borderBottom={{
              xs: css`3px solid ${({ theme }) => theme.colors.secondary}`,
            }}
          />
          <Text
            tag="h3"
            variant="subTitle2"
            textAlign="center"
          >
            Instalura
          </Text>
        </MyProjectsWrapper.Card>
        <MyProjectsWrapper.Card
          href="https://instalura-base-andremassaki.vercel.app"
          width={{
            xs: '80vw',
            md: '25vw',
          }}
          margin={{
            xs: '1rem auto',
            md: '1rem',
          }}
        >
          <MyProjectsWrapper.CardImage
            src="/images/Instalura-Mobile.png"
            width="100%"
            borderBottom={{
              xs: css`3px solid ${({ theme }) => theme.colors.secondary}`,
            }}
          />
          <Text
            tag="h3"
            variant="subTitle2"
            textAlign="center"
          >
            Instalura
          </Text>
        </MyProjectsWrapper.Card>
        <MyProjectsWrapper.Card
          href="https://instalura-base-andremassaki.vercel.app"
          display="flex"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
          order={{
            xs: '-1',
            md: 'initial',
          }}
          margin={{
            xs: '1rem auto',
            md: '1rem',
          }}
          width={{
            xs: '80vw',
            md: 'calc(75vw + 4rem)',
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
            borderRight={{
              md: css`3px solid ${({ theme }) => theme.colors.secondary}`,
            }}
            borderBottom={{
              xs: css`3px solid ${({ theme }) => theme.colors.secondary}`,
              md: 'none',
            }}
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
                md: '2.5rem 0 2rem 1rem',
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
      </Box>
    </MyProjectsWrapper>
  );
}
