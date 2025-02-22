// @flow strict
import { type Node } from 'react';
import { Box, TapArea } from 'gestalt';
import AccessibilitySection from '../../docs-components/AccessibilitySection.js';
import CombinationNew from '../../docs-components/CombinationNew.js';
import docGen, { type DocGen, type DocType } from '../../docs-components/docgen.js';
import GeneratedPropTable from '../../docs-components/GeneratedPropTable.js';
import InternalDocumentationSection from '../../docs-components/InternalDocumentationSection.js';
import LocalizationSection from '../../docs-components/LocalizationSection.js';
import MainSection from '../../docs-components/MainSection.js';
import Page from '../../docs-components/Page.js';
import PageHeader from '../../docs-components/PageHeader.js';
import QualityChecklist from '../../docs-components/QualityChecklist.js';
import SandpackExample from '../../docs-components/SandpackExample.js';
import accessibility from '../../examples/taparea/accessibility.js';
import compressBehavior from '../../examples/taparea/compressBehavior.js';
import fullSpace from '../../examples/taparea/fullSpace.js';
import heightWidth from '../../examples/taparea/heightWidth.js';
import inlineUsage from '../../examples/taparea/inlineUsage.js';
import main from '../../examples/taparea/main.js';
import mouseCursor from '../../examples/taparea/mouseCursor.js';
import withLinkButton from '../../examples/taparea/withLinkButton.js';

export default function DocsPage({ generatedDocGen }: DocType): Node {
  return (
    <Page title={generatedDocGen?.displayName}>
      <PageHeader
        name={generatedDocGen?.displayName}
        description={generatedDocGen?.description}
        pdocsLink
      >
        <SandpackExample code={main} name="TapArea example" hideEditor />
      </PageHeader>

      <GeneratedPropTable generatedDocGen={generatedDocGen} />

      <AccessibilitySection name={generatedDocGen?.displayName}>
        <MainSection.Subsection title="ARIA attributes">
          <MainSection.Card
            sandpackExample={
              <SandpackExample name="ARIA attributes examples" code={accessibility} />
            }
          />
        </MainSection.Subsection>
      </AccessibilitySection>

      <LocalizationSection name={generatedDocGen?.displayName} noDefaultLabelProvider />

      <MainSection name="Variants">
        <MainSection.Subsection title="Link/Button within TapArea">
          <MainSection.Card
            description={`If you have a \`Link\` or \`Button\` inside of TapArea, you can apply \`e.stopPropagation()\` so the \`onTap\` doesn't get triggered.

TapArea with link interaction can be paired with GlobalEventsHandlerProvider. See [GlobalEventsHandlerProvider](/web/utilities/globaleventshandlerprovider#Link-handlers) to learn more about link navigation.
  `}
            sandpackExample={
              <SandpackExample name="With Link Button Example" code={withLinkButton} />
            }
          />
        </MainSection.Subsection>

        <MainSection.Subsection title="Compress behavior">
          <MainSection.Card
            sandpackExample={
              <SandpackExample
                name="Compress Behavior Example"
                code={compressBehavior}
                layout="column"
                previewHeight={400}
              />
            }
          />
        </MainSection.Subsection>

        <MainSection.Subsection title="Height & width">
          <MainSection.Card
            sandpackExample={<SandpackExample name="Height & Width Example" code={heightWidth} />}
          />
          <MainSection.Card
            cardSize="lg"
            title="Full space with no children"
            sandpackExample={
              <SandpackExample name="Full space with no children" code={fullSpace} />
            }
          />
        </MainSection.Subsection>

        <MainSection.Subsection title="Inline usage">
          <MainSection.Card
            description={`While TapArea doesn't provide an \`inline\` prop, this behavior can be achieved by wrapping with \`<Box display="inlineBlock">\`.`}
            sandpackExample={<SandpackExample name="Inline Usage Example" code={inlineUsage} />}
          />
        </MainSection.Subsection>
        <MainSection.Subsection title="Mouse cursor">
          <MainSection.Card
            sandpackExample={<SandpackExample name="Mouse cursor" code={mouseCursor} />}
          />
        </MainSection.Subsection>

        <MainSection.Subsection
          title="Rounding"
          description="In ordee to observe TapArea's border radius, focus on each component below navigating with the keyboard. `fullWidth={false}` might be required to wrap to the children component. Make the sure the children components match the rounding as well."
        >
          <CombinationNew cardSize="xs" rounding={[0, 1, 2, 3, 4, 5, 6, 7, 8, 'circle', 'pill']}>
            {({ rounding }) => (
              <TapArea
                rounding={rounding}
                fullWidth={false}
                accessibilityLabel={`rounding: ${rounding}`}
              >
                <Box
                  borderStyle="lg"
                  width={rounding === 'pill' ? 120 : 70}
                  height={70}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  rounding={rounding}
                />
              </TapArea>
            )}
          </CombinationNew>
        </MainSection.Subsection>
      </MainSection>

      <QualityChecklist component={generatedDocGen?.displayName} />

      <InternalDocumentationSection
        items={[
          {
            href: 'https://pdocs.pinadmin.com/docs/webapp/docs/gestalt-ads-logging-extension#ads-logging-extension',
            text: 'Ads logging extension',
          },
        ]}
      />

      <MainSection name="Related">
        <MainSection.Subsection
          description={`
**[TapAreaLink](/web/taparealink)**
Use TapAreaLink when a link is needed instead of an action.
      `}
        />
      </MainSection>
    </Page>
  );
}

export async function getServerSideProps(): Promise<{
  props: { generatedDocGen: DocGen },
}> {
  return {
    props: { generatedDocGen: await docGen('TapArea') },
  };
}
