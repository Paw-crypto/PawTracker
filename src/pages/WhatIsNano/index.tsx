import * as React from "react";
import { useTranslation } from "react-i18next";
import { Card, Typography } from "antd";

const { Title } = Typography;

// https://senatusspqr.medium.com/the-basics-of-nano-why-you-should-be-excited-about-it-75310fdb99d5?

const WhatIsNanoPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Card>
        <Title level={2}>
          The basics of Nano — why you should be excited about it
        </Title>
        <span
          className="color-muted"
          style={{ display: "block", fontSize: "12px", marginBottom: "12px" }}
        >
          5 minutes read that will change your perceptions - {t("common.by")}{" "}
          <a
            href="https://senatusspqr.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Senatus
          </a>
        </span>
        <Title level={3}>The promising world of cryptocurrencies</Title>
        <p>
          There’s a good chance you’ll have heard a friend talking about
          cryptocurrency recently. What is it, and why are people so excited
          about it? In this post, I’ll try to shortly explain what the idea
          behind cryptocurrency is, and why specifically Nano is an incredibly
          exciting project.
        </p>
        <p>
          The first crypto that came into existence was{" "}
          <a
            href="https://www.wired.com/2011/11/mf-bitcoin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bitcoin
          </a>
          . Created by{" "}
          <a
            href="https://www.investopedia.com/tech/three-people-who-were-supposedly-bitcoin-founder-satoshi-nakamoto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Satoshi Nakamoto
          </a>
          , it solved the challenge of how to have digital money that could not
          be copied. It offered money where no one party had control over money
          issuance and transaction validation, and in doing so offered a way to
          transact, internationally, without relying on so-called “fiat”
          currencies (such as the dollar and euro), and without relying on
          banks.
        </p>
        <p>
          This was an attractive proposition following 2008, where banks were
          massively bailed out, and central banks around the world printed a lot
          of extra money to support these bailouts. This money printing hasn’t
          stopped since, leading many people to conclude that as extra dollars
          and euros are being printed, their own dollars and euros are becoming
          worth less and less over time.
        </p>
        {/*
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        ></a>
         */}
        <p>
          However, Bitcoin comes with its own share of issues. Transactions
          take, on average,{" "}
          <a
            href="https://www.blockchain.com/charts/avg-confirmation-time"
            target="_blank"
            rel="noopener noreferrer"
          >
            over 2 hours to confirm
          </a>
          , while being incredibly expensive, and use{" "}
          <a
            href="https://medium.com/the-capital/the-environmental-idiocy-of-bitcoin-investment-8c5cd36f802a"
            target="_blank"
            rel="noopener noreferrer"
          >
            massive amounts of energy
          </a>
          . It doesn’t scale, with transactions maxing out at roughly 7
          transactions per second, and due to the fees and waiting times is
          practically unusable as money.
        </p>
        <Title level={3}>Enter Nano</Title>
        <p>
          Nano’s primary developer, Colin LeMahieu, was enthusiastic about the
          possibilities that such a self-sovereign form of money offered, but
          was frustrated with the inefficiency inherent in the current crypto
          models. In 2014, he began development on a new form of cryptocurrency
          network. The goal was to create an efficient cryptocurrency, one that
          could be used for daily payments, by anyone in the world, without the
          emissions that come with Bitcoin.
        </p>
        <blockquote>
          Nano makes money efficient for a more equal world — simple to pay
          with, easy to accept and open to all.
        </blockquote>
        <iframe
          title="Nano around the world"
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=iKt9KepQQF4"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <p>
          As you can see in the video, Nano is borderless money. It’s completely
          feeless to send, and transfers instantly. It’s so energy efficient
          that it could run at thousands of transactions per second on the
          energy output of a single wind turbine. Rather than having a max of 7
          transactions per second, the Nano network uses whatever resources
          available, and can handle ever more as hardware improves. Using Nano
          is the way money is used in science fiction movies — effortless,
          instant and feeless. Hard to believe, even after watching the video?
        </p>
        <Title level={4}>You can try it for free, within 2 minutes.</Title>
        <ol>
          <li>
            Install Natrium (
            <a
              href="https://play.google.com/store/apps/details?id=co.banano.natriumwallet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Android here
            </a>
            ,{" "}
            <a
              href="https://itunes.apple.com/us/app/natrium/id1451425707?ls=1&mt=8"
              target="_blank"
              rel="noopener noreferrer"
            >
              iOS here)
            </a>
            .
          </li>
          <li>
            Visit a{" "}
            <a href="/faucets" target="_blank" rel="noopener noreferrer">
              Nano Faucet
            </a>
            .
          </li>
          <li>Fill in your Nano_ address and hit send.</li>
        </ol>

        <p>
          That’s all! To really try it out I’d recommend getting a second wallet
          such as{" "}
          <a href="https://nault.cc/" target="_blank" rel="noopener noreferrer">
            Nault
          </a>{" "}
          (web-based) or Nalli (
          <a
            href="https://play.google.com/store/apps/details?id=fi.heimo.nalli"
            target="_blank"
            rel="noopener noreferrer"
          >
            Android here
          </a>
          ,{" "}
          <a
            href="https://apps.apple.com/app/id1515601975"
            target="_blank"
            rel="noopener noreferrer"
          >
            iOS here
          </a>
          ), then sending some Nano from your first wallet to the second.
        </p>

        <Title level={4}>So how does this work?</Title>

        <p>
          Nano is a cryptocurrency, but uses a different model than traditional
          cryptocurrencies such as Bitcoin. Rather than having one big
          blockchain, where everyone competes for space in the next “block” to
          be mined and added to the chain, Nano utilises something called the
          <a
            href="https://www.mycryptopedia.com/nano-block-lattice-explained/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Block Lattice
          </a>
          . Rather than competing for space, users add blocks to their own chain
          which are processed asynchronously, instantly.
        </p>

        <Title level={4}>So there’s no mining?</Title>
        <p>
          Correct. Rather than using mining, Nano uses Open Representative
          Voting. Miners do not compete to add the next block in Nano, rather
          Nano holders vote for Representatives who then confirm transactions on
          their behalf. Anyone can be a representative, and anyone can change
          their vote at any time. These Representatives confirm transactions as
          soon as they see them come in, which means that Nano’s speed is mostly
          limited by internet connection latency (practically the speed of
          light).
        </p>

        <p>
          The lack of mining is also what makes Nano so incredibly energy
          efficient. In Bitcoin, miners essentially engage in a bidding war,
          spending as much energy as possible to increase their odds of being
          the one to add the next block to the chain. Nano does away with this
          competition, away with this energy waste, and focuses on efficiency.
        </p>

        <Title level={4}>What’s the idea behind this?</Title>
        <p>
          Nano is intended to be digital money for the modern world. It was
          distributed, for free, to anyone willing to solve captchas. Because of
          this, Nano was distributed mostly to people in poorer countries.
          Because of its feeless nature, it’s ideal for lower-income countries.
          Because of being instant, it works as a medium of exchange, as money.
          Because there are no fees and there is no inflation, no money is lost
          when either storing value in Nano, or when using Nano.
        </p>

        <Title level={4}>So why hasn’t this taken off yet?</Title>
        <p>
          I’m speculating here, but I think that many people have heard of
          Bitcoin. If you’ve spoken to someone about cryptocurrency, there’s a
          good chance they mentioned Bitcoin. A fraction of those who hear about
          it actually try to use Bitcoin, and most, justly, conclude that
          Bitcoin is slow and clunky. To many people, Bitcoin = cryptocurrency,
          and therefore all cryptocurrency must be slow and clunky. Nano’s
          claims seem outlandish after having experienced Bitcoin, and it’s easy
          to dismiss it as a scam. Hence my instruction, at the start of this
          post, on how to try Nano out for free, within 2 minutes. Since you
          probably skipped over it the first time, I’d like to end this article
          by saying that you spent so long reading this, you might as well try
          it out, for free!
        </p>

        <p>
          We Nano enthusiasts welcome anyone who wants to talk about Nano on{" "}
          <a
            href="https://www.reddit.com/r/nanocurrency"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reddit
          </a>{" "}
          and{" "}
          <a
            href="https://chat.nano.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          .
        </p>
      </Card>
    </>
  );
};

export default WhatIsNanoPage;