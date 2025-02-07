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
import { useActionState } from "react";
import { createPost } from "@/actions/create-post";

type CreatePostFormProps={
    slug:string
}

const PostCreateForm : React.FC<CreatePostFormProps> = ({slug}) => {
  const [formState, action]= useActionState(createPost.bind(null, slug), {errors:{}});
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create a new post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Create a new post</DialogTitle>
            <DialogDescription>Write a new post. Click save when you done</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="title" className="text-semibold">
                Title
              </Label>
              <Input id="title" name="title" />
            </div>
            {formState.errors.title && <p className="text-sm text-red-600">{formState.errors.title}</p>}
            <div>
              <Label htmlFor="username" className="text-semibold">
                Content
              </Label>
              <Textarea id="content" name="content" />
            </div>
            {formState.errors.content && <p className="text-sm text-red-600">{formState.errors.content}</p>}
            {formState.errors.formError && <div className="border border-red-500 bg-red-200 p-2 rounded-md font-semibold">{formState.errors.formError}</div>}
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Post
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PostCreateForm;
