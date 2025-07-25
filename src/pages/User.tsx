import { AddUserModal } from "@/components/module/User/AddUserModal";
import { removeUser, selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Trash2 } from "lucide-react";

const User = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="w-[80%] mx-auto flex justify-between mt-3">
        <h1 className="text-2xl font-bold ">User</h1>
        <AddUserModal></AddUserModal>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {users.map((user) => (
          <div className="border-2 border-primary rounded-md p-10 flex justify-between">
            <p className="text-xl font-bold">{user.name}</p>
            <Trash2
              onClick={() => dispatch(removeUser(user.id))}
              className="text-red-500 cursor-pointer"
            ></Trash2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
