import TMInput from "@/components/form/TMInput";
import { Button } from "@/components/ui/button";
import { v4 as uuid } from "uuid";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types/types";
import TMForm from "@/components/form/TMForm";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { addUser } from "@/redux/features/user/userSlice";

export function AddUserModal() {
  const dispatch = useAppDispatch();
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const userData: IUser = {
      id: uuid(),
      name: data.name,
    };
    dispatch(addUser(userData));
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Add User</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <TMForm className="space-y-3" onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add User</DialogTitle>
            </DialogHeader>

            <TMInput name="name" label="Name" />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </TMForm>
        </DialogContent>
      </form>
    </Dialog>
  );
}
