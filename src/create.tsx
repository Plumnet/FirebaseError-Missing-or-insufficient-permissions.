import React, { useEffect, useState } from 'react'
import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import db, { auth } from '@/firebase';
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router'
import { onAuthStateChanged } from 'firebase/auth';
import Create from './pages/components/create';

export default function create(todo: any) {

    const router = useRouter();
    console.log(router)

    //オブジェクトの各要素の型指定
    type Todo = {
        id: number;
        title: string;
    };

    //Stateにはオブジェクトの型を指定
    const [todos, setTodos] = useState<Todo[]>([])
    //新規登録のための、TitleのState
    const [todoTitle, setTodoTitle] = useState("");
    const [user, setUser] = useState<any>("");

    //クリックイベント用の追加用のための関数
    const handleAddTodo = async () => {
        const docRef = await addDoc(collection(db, "todo"), {
            todoTitle: todoTitle
        });
        router.push('/list')
    };

    //チェンジイベント用の追加のための関数
    const handleAddFormChanges = (e: any) => {
        setTodoTitle(e.target.value);
    };

    //画像の制御
    const innerBoxStyles = {
        p: '5',
        backgroundImage:
            'url(http://rynona.sakura.ne.jp/sblo_files/rygames/image/Ws001282_-thumbnail2.png) ',
    }

    async function newTodo(todo: any) {
        await setDoc(doc(db, "todo", '3'), { id: 3, titile: 10, text: 20 })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (user !== null) {
                setUser(currentUser)
            };
        });
    }, []);

    console.log(user);

    //表示部分
    return (
        //ChakraUIを使用するのに、不可欠
        <div>
            {/* 見出し部分の表示領域 */}
            <Box>
                <Text fontSize={32} color='Yellow' textAlign={['left']}>
                    作成画面
                </Text>
            </Box>
            {/* addはonClick、titleは入力フォームの値、addformはonChange */}
            <Create add={handleAddTodo} title={todoTitle} addform={handleAddFormChanges} />
            <button onClick={() => newTodo(todo)}>ボタン</button>
        </div>
    )
}
