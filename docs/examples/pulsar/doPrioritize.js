// @flow strict
import { type Node, useEffect, useRef, useState } from 'react';
import { Box, Flex, IconButton, PopoverEducational, Pulsar } from 'gestalt';

export default function Example(): Node {
  const [showEducation, setShowEducation] = useState(false);
  const anchorRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    setShowEducation(true);
  }, []);

  return (
    <Flex justifyContent="center" height="100%" width="100%">
      <Box dangerouslySetInlineStyle={{ __style: { marginTop: 80 } }} position="relative">
        <IconButton accessibilityLabel="Example icon button" icon="flashlight" />

        <Box ref={anchorRef} position="absolute" top margin={-5}>
          <Pulsar size={88} />
        </Box>
        {showEducation && (
          <PopoverEducational
            anchor={anchorRef.current}
            idealDirection="down"
            onDismiss={() => {}}
            message="Want to find more Pins that look like this? Find more ideas with visual search"
            primaryAction={{
              text: 'Dismiss',
              onClick: () => {},
              role: 'button',
            }}
          />
        )}
      </Box>
    </Flex>
  );
}
