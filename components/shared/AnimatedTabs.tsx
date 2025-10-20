'use client';

import React from 'react';
import Link from 'next/link';

import { AnimatePresence, motion, Transition } from 'motion/react';

import useTabs, { type Tab } from '@/hooks/useTabs';
import { cn } from '@/lib/utils';

interface AnimatedTabsProps {
  tabs: Tab[];
}

const transition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.15
};

const getHoverAnimationProps = (hoveredRect: DOMRect, navRect: DOMRect) => ({
  x: hoveredRect.left - navRect.left - 10,
  y: hoveredRect.top - navRect.top - 4,
  width: hoveredRect.width + 20,
  height: hoveredRect.height + 10
});

const Tabs = ({ tabs, selectedTabIndex, setSelectedTab }: { tabs: Tab[]; selectedTabIndex: number; setSelectedTab: (input: [number, number]) => void }) => {
  const [buttonRefs, setButtonRefs] = React.useState<Array<HTMLAnchorElement | null>>([]);

  React.useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);

  const navRef = React.useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();

  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const [hoveredTabIndex, setHoveredTabIndex] = React.useState<number | null>(null);
  const hoveredRect = buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();

  return (
    <nav
      ref={navRef}
      className="flex flex-shrink-0 justify-center items-center relative py-2"
      onPointerLeave={() => setHoveredTabIndex(null)}>
      {tabs.map((item, i) => {
        const isActive = selectedTabIndex === i;

        return (
          <Link
            key={item.value}
            href={item.href || '#'}
            className="relative rounded-md flex items-center h-8 px-4 z-20 bg-transparent cursor-pointer select-none transition-colors"
            onPointerEnter={() => setHoveredTabIndex(i)}
            onFocus={() => setHoveredTabIndex(i)}
            onClick={() => setSelectedTab([i, i > selectedTabIndex ? 1 : -1])}>
            <motion.span
              ref={(el) => {
                buttonRefs[i] = el as HTMLAnchorElement;
              }}
              className={cn('block text-sm', {
                'text-zinc-500': !isActive,
                'text-black dark:text-white font-semibold': isActive
              })}>
              <span className={item.value === 'danger-zone' ? 'text-red-500' : ''}>{item.label}</span>
            </motion.span>
          </Link>
        );
      })}

      <AnimatePresence>
        {hoveredRect && navRect && (
          <motion.div
            key="hover"
            className={`absolute z-10 top-0 left-0 rounded-md ${hoveredTabIndex === tabs.findIndex(({ value }) => value === 'danger-zone')
              ? 'bg-red-100 dark:bg-red-500/30'
              : 'bg-zinc-100 dark:bg-zinc-800'
              }`}
            initial={{ ...getHoverAnimationProps(hoveredRect, navRect), opacity: 0 }}
            animate={{ ...getHoverAnimationProps(hoveredRect, navRect), opacity: 1 }}
            exit={{ ...getHoverAnimationProps(hoveredRect, navRect), opacity: 0 }}
            transition={transition as Transition<any>}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedRect && navRect && (
          <motion.div
            className={`absolute z-10 bottom-0 left-0 h-[2px] ${selectedTabIndex === tabs.findIndex(({ value }) => value === 'danger-zone')
              ? 'bg-red-500'
              : 'bg-black dark:bg-white'
              }`}
            initial={false}
            animate={{
              width: selectedRect.width + 18,
              x: `calc(${selectedRect.left - navRect.left - 9}px)`,
              opacity: 1
            }}
            transition={transition as Transition<any>}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export function AnimatedTabs({ tabs }: AnimatedTabsProps) {
  const [hookProps] = React.useState(() => {
    const initialTabId =
      tabs.find(
        (tab) => tab.value === 'home'
      )?.value || tabs[0].value;

    return {
      tabs: tabs.map(({ label, value, subRoutes, href }) => ({
        label,
        value,
        subRoutes,
        href
      })),
      initialTabId
    };
  });

  const framer = useTabs(hookProps);

  return (
    <div className="relative flex w-full items-start justify-start overflow-x-auto overflow-y-hidden">
      <Tabs {...framer.tabProps} />
    </div>
  );
}