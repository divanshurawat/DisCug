'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { createTopics } from "@/actions/create-topics";
import { useActionState } from "react";

const TopicCreateForm = () => {
  const [formState, action]= useActionState(createTopics, {errors:{}});
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Topic</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Add new topic</DialogTitle>
            <DialogDescription>Add new topic to discuss</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="name" className="text-semibold">
                Topic Name
              </Label>
              <Input id="name" name="name" />
            </div>
            {formState.errors.name && <p className="text-sm text-red-600">{formState.errors.name}</p>}
            <div>
              <Label htmlFor="username" className="text-semibold">
                Description
              </Label>
              <Textarea id="description" name="description" />
            </div>
            {formState.errors.description && <p className="text-sm text-red-600">{formState.errors.description}</p>}
            {formState.errors.formError && <div className="border border-red-500 bg-red-200 p-2 rounded-md font-semibold">{formState.errors.formError}</div>}
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TopicCreateForm;
