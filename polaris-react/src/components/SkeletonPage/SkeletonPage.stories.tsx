import React from 'react';
import type {ComponentMeta} from '@storybook/react';
import {
  LegacyCard,
  Layout,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonPage,
  TextContainer,
} from '@shopify/polaris';

export default {
  component: SkeletonPage,
} as ComponentMeta<typeof SkeletonPage>;

export function Default() {
  return (
    <SkeletonPage>
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <SkeletonBodyText />
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section secondary>
          <LegacyCard>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
          </LegacyCard>
          <LegacyCard subdued>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={2} />
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
}

export function WithStaticContent() {
  return (
    <SkeletonPage
      title="#1054"
      primaryAction={{content: 'Create order'}}
      subtitle="October 19, 2020 at 3:45 p.m. from Online Store"
      backAction={{url: '', content: 'Back to orders'}}
    >
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <SkeletonBodyText />
          </LegacyCard>
          <LegacyCard sectioned title="Images">
            <SkeletonBodyText />
          </LegacyCard>
          <LegacyCard sectioned title="Variants">
            <SkeletonBodyText />
          </LegacyCard>
        </Layout.Section>
        <Layout.Section secondary>
          <LegacyCard title="Sales channels">
            <LegacyCard.Section>
              <SkeletonBodyText lines={2} />
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
          </LegacyCard>
          <LegacyCard title="Organization" subdued>
            <LegacyCard.Section>
              <SkeletonBodyText lines={2} />
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={2} />
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
}

export function WithNarrowWidth() {
  return (
    <SkeletonPage primaryAction narrowWidth>
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <SkeletonBodyText />
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section secondary>
          <LegacyCard>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
          </LegacyCard>
          <LegacyCard subdued>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={2} />
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
}

export function WithFullWidth() {
  return (
    <SkeletonPage primaryAction fullWidth>
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <SkeletonBodyText />
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section secondary>
          <LegacyCard>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
          </LegacyCard>
          <LegacyCard subdued>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={2} />
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
}

export function WithBackAction() {
  return (
    <SkeletonPage primaryAction backAction subtitle>
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <SkeletonBodyText />
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section secondary>
          <LegacyCard>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
          </LegacyCard>
          <LegacyCard subdued>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={2} />
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
}

export function WithSubtitle() {
  return (
    <SkeletonPage primaryAction subtitle>
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <SkeletonBodyText />
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section secondary>
          <LegacyCard>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
          </LegacyCard>
          <LegacyCard subdued>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={2} />
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
}
