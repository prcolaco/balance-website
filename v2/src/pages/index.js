import React from "react";
import { Box, Heading, Button, Text, Link, Card, Flex } from "rebass";
import { TwitterTweetEmbed } from "react-twitter-embed";

import Layout from "../components/Layout";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Wave from "../components/Wave";

import tweets from "../data/tweets.json";
import Footer from "../components/Footer";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* Header */}
    <Container>
      <Header />
    </Container>

    {/* Main */}
    <Box as="main">
      <Box>
        <Wave color="pink" />
        <Wave color="blue" />
        <Wave color="purple" />
        <Wave color="green" />
        <Wave color="yellow" />

        <Container>
          <Box>
            <Heading>Welcome to the open financial system</Heading>
            <Text>
              Get access to the best tools and investment opportunities that are
              being built on Ethereum.
            </Text>
          </Box>
          {/* App Store */}
          download on app store
        </Container>
      </Box>

      <Box bg="white" py={4}>
        <Container>
          {/* Community */}
          <Box mb={[4, 5]}>
            <Heading textAlign="center" fontWeight={2} fontSize={3}>
              Join the <strong>Balance Community</strong>
            </Heading>

            <Card
              p={1}
              width={1 / 3}
              borderRadius={6.4}
              border="1px solid #d6d6d6"
              bg="#fafbfc"
              boxShadow="0 2px 3px 0 rgba(241, 241, 241, 0.5)"
            >
              <Flex justifyContent="space-between">
                <input placeholder="your@email.com" type="email" />
                <Button variant="foam">Join Us</Button>
              </Flex>
            </Card>
          </Box>

          {/* Tweets */}
          <Box>
            <Text fontSize={3} textAlign="center">
              Follow <Link href="">@balance_io</Link> on Twitter
            </Text>
            {tweets.map(tweet => (
              <TwitterTweetEmbed tweetId={tweet} />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>

    {/* Footer */}
    <Box bg="white" py={3}>
      <Container>
        <Footer />
      </Container>
    </Box>
  </Layout>
);

export default IndexPage;
