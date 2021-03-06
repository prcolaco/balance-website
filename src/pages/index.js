import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Heading, Text, Flex } from "rebass";
import { css } from "styled-components";
import Image from "gatsby-image";

import Layout from "../components/Layout";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Waves from "../components/Waves";
import { ExternalLink } from "../components/Links";
import Strong from "../components/Strong";
import Footer from "../components/Footer";
import { Subscribers, SubscriptionForm } from "../components/Community";
import Tweets from "../components/Tweets";
import AppStoreBadge from "../components/AppStoreBadge";
import IntegrationStack from "../components/IntegrationStack";

const IndexPage = () => (
  <Layout>
    <SEO />

    {/* Header */}
    <Container>
      <Header />
    </Container>

    {/* Main */}
    <Box as="main">
      <Box pt={3}>
        {/* Intro */}
        <Container pt={5}>
          <Box>
            <Heading
              as="h1"
              fontFamily="graphik"
              fontSize={5}
              color="text"
              textAlign="center"
              fontWeight="semibold"
            >
              See your Balance in Open Finance
            </Heading>
            <Text
              as="p"
              fontFamily="graphik"
              fontWeight="regular"
              lineHeight={1.4}
              mb={0}
              textAlign="center"
              css={{ maxWidth: 576 }}
              mx="auto"
              fontSize={4}
              mt={3}
              color="textLighter"
            >
              Add all of your Ethereum wallets and keep track of your tokens,
              loans and investments.
            </Text>
          </Box>
        </Container>

        <Box mt={5} mb={3} css={{ position: "relative" }}>
          <Waves />

          <Container>
            <Flex mx={-2} flexDirection={["column", null, "row"]}>
              {/* Cards */}
              <Flex
                justifyContent="center"
                flexDirection="column"
                width={[`100%`, null, `60%`]}
                px={2}
              >
                <IntegrationStack />
              </Flex>

              {/* Phone */}
              <Flex
                flexDirection="column"
                width={[`100%`, null, `40%`]}
                px={2}
                css={css`
                  display: none;
                  @media screen and (min-width: 52em) {
                    display: block;
                  }
                `}
              >
                <Phone />
              </Flex>
            </Flex>
          </Container>
        </Box>

        <Box my={5}>
          <Container>
            {/* App Store */}
            <Flex justifyContent="center" mb={4}>
              <AppStoreBadge />
            </Flex>

            {/* Community */}
            <Box mb={4}>
              <Heading fontWeight="regular" textAlign="center" fontSize={3}>
                Get notified about our <Strong>Android</Strong> app
              </Heading>
              <Flex justifyContent="center" my={3}>
                <SubscriptionForm />
              </Flex>
              <Subscribers />
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Tweets */}
      <Box bg="white" py={4}>
        <Container maxWidth={1136}>
          <Heading
            fontWeight="regular"
            textAlign="center"
            fontSize={3}
            mt={0}
            mb={22}
          >
            Follow{" "}
            <ExternalLink
              color="deepSkyBlue"
              href="https://twitter.com/balance_io"
            >
              <Strong>@balance_io</Strong>
            </ExternalLink>{" "}
            on Twitter
          </Heading>
          <Tweets />
        </Container>
      </Box>
    </Box>

    {/* Footer */}
    <Box bg="white" py={4}>
      <Container>
        <Footer />
      </Container>
    </Box>
  </Layout>
);

const Phone = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "deviceDesktop.png" }) {
        childImageSharp {
          fixed(height: 692) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return <Image fixed={image.file.childImageSharp.fixed} />;
};

export default IndexPage;
