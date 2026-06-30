import React from "react";
import { ScrollArea } from "radix-ui";

const FormScrollArea = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollArea.Root
      type="always"
      scrollHideDelay={700}
      className="w-full h-full rounded-tr-lg rounded-br-lg">
      <ScrollArea.Viewport
        onClick={(e) => e.stopPropagation()}
        className="w-full h-full px-6 pt-8.25 pb-39
                   md:px-14 md:pt-14.75">
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        onClick={(e) => e.stopPropagation()}
        className="w-7.5 h-[calc(100%-150px)] p-2.5 bg-transparent"
        orientation="vertical">
        <ScrollArea.Thumb
          className="w-2 rounded-xs relative
                   before:bg-[#dfe3fa]
                     before:rounded-lg
                     before:w-full
                     before:h-[40%]
                     before:absolute
                     before:top-30"
        />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};

export default FormScrollArea;
