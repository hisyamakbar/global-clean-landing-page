"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item ref={ref} className={cn("outline outline-1 outline-[#D0D6E2] rounded-2xl", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger ref={ref} className={cn("flex flex-1 items-center justify-between py-4 px-6 text-base transition-all focus:rounded-2xl [&[data-state=open]>svg]:rotate-180", className)} {...props}>
			<div className="flex gap-4 items-center text-[#333]">{children}</div>
			<ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content ref={ref} className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down px-6" {...props}>
		<div className={cn("pb-4 pt-0 text-[#717171]", className)}>{children}</div>
	</AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
