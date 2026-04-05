import React, { useEffect, useState } from "react";
import {  Modal, Switch } from 'antd';
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import delet from "../assets/delete.svg";
import edit from "../assets/edit.svg";
import info from '../assets/info.svg'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import {
  GetTodo,
  addUser,
  editUser,
  deleteUser,
  checkStatus,
  deleteImage,
  addImage,
  apiImage,
  infoData,
} from "../api/todoApi";
import { Link } from "react-router";


const App = () => {
  const { data } = useSelector((store: any) => store.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTodo() as any);
  }, []);

  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [imgModal, setImgModal] = useState(false);

  const [idx, setIdx] = useState<number | null>(null);

  const { control, handleSubmit, reset, setValue, register } = useForm();



  const onSubmit = (data: any) => {
    let form = new FormData();
    form.append("Name", data.name);
    form.append("Description", data.description);

   
    if (!idx) {
      dispatch(addUser(form) as any);
      setAddModal(false);
      reset();
    } else {
      dispatch(
        editUser({
          id: idx,
          name: data.name,
          description: data.description,
        }) as any
      );
      setEditModal(false);
    }
  };


  const handleEdit = (user: any) => {
    setIdx(user.id);
    setValue("name", user.name);
    setValue("description", user.description);
  };

 
  const onAddImage = (data: any) => {
    let form = new FormData();
    for (let i = 0; i < data.fileImg.length; i++) {
      form.append("Images", data.fileImg[i]);
    }

    dispatch(addImage({ id: idx, formData: form }) as any);
    setImgModal(false);
    reset();
  };

  return (
    <>
      <Button onClick={() => setAddModal(true)} className="m-[50px]">
        ADD USER +
      </Button>

      <div className="flex flex-wrap gap-[30px] m-[100px]">
  {data.map((user: any) => (
    <Card key={user.id} className="w-[320px]">

      <CardHeader>
        <CardTitle
          className={
            user.isCompleted ? "text-green-500" : "text-red-500"
          }
        >
          {user.name}
        </CardTitle>

        <CardDescription>
          {user.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {user.images.map((img: any) => (
          <div key={img.id} className="mb-[10px]">
            <img
              src={`${apiImage}/${img.imageName}`}
              className="w-full h-[150px] object-cover rounded-md"
            />

            <div className="flex justify-center gap-[10px] mt-[5px]">
              <Button
                danger
                onClick={() =>
                  dispatch(deleteImage(img.id) as any)
                }
              >
                del
              </Button>
              <Button
                onClick={() => {
                  setIdx(user.id);
                  setImgModal(true);
                }}
              >
                add
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-center gap-[10px]">
        <img
          src={edit}
          onClick={() => {
            handleEdit(user);
            setEditModal(true);
          }}
        />

        <img
          src={delet}
          onClick={() =>
            dispatch(deleteUser(user.id) as any)
          }
        />

        <Link to={`/Info/:${user.id}`}>
          <img
            src={info}
            onClick={() => dispatch(infoData(user.id) as any)}
          />
        </Link>

        <Switch
          checked={user.isCompleted}
          onChange={() =>
            dispatch(checkStatus(user.id) as any)
          }
        />
      </CardFooter>
    </Card>
  ))}
</div>
      <Modal open={addModal} onCancel={() => setAddModal(false)} footer={null}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Name" />}
          />

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Description" />
            )}
          />

          <input type="file" multiple {...register("file")} />

          <button type="submit">Save</button>
        </form>
      </Modal>

      <Modal open={editModal} onCancel={() => setEditModal(false)} footer={null}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input {...field} />}
          />

          <Controller
            name="description"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
       

          <button type="submit">Save</button>
        </form>
      </Modal>
      <Modal open={imgModal} onCancel={() => setImgModal(false)} footer={null}>
        <form onSubmit={handleSubmit(onAddImage)}>
          <input type="file" multiple {...register("fileImg")} />
          <button type="submit">Save</button>
        </form>
      </Modal>
    </>
  );
};

export default App;



