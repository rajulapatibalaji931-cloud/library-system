import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function EditBook() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [available, setAvailable] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {

        loadBook();

    }, []);

    const loadBook = async () => {

        try {

            const res = await api.get(`/books/${id}`);

            setTitle(res.data.title);
            setAuthor(res.data.author);
            setCategory(res.data.category);
            setQuantity(res.data.quantity);
            setAvailable(res.data.available);
            setDescription(res.data.description);
            setImage(res.data.image);

        }

        catch (error) {

            console.log(error);

        }

    };

    const updateBook = async (e) => {

        e.preventDefault();

        try {

            await api.put(`/books/${id}`, {

                title,
                author,
                category,
                quantity: Number(quantity),
                available: Number(available),
                description,
                image

            });

            alert("Book Updated Successfully");

            navigate("/books");

        }

        catch (error) {

            alert(error.response?.data?.message);

        }

    };

    return (

        <>

            <Navbar />

            <div style={{ display: "flex" }}>

                <Sidebar />

                <div
                    style={{
                        flex: 1,
                        padding: "20px"
                    }}
                >

                    <h2>Edit Book</h2>

                    <form onSubmit={updateBook}>

                        <input
                            type="text"
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)
                            }
                        />

                        <br /><br />

                        <input
                            type="text"
                            value={author}
                            onChange={(e) =>
                                setAuthor(e.target.value)
                            }
                        />

                        <br /><br />

                        <input
                            type="text"
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                        />

                        <br /><br />

                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) =>
                                setQuantity(e.target.value)
                            }
                        />

                        <br /><br />

                        <input
                            type="number"
                            value={available}
                            onChange={(e) =>
                                setAvailable(e.target.value)
                            }
                        />

                        <br /><br />

                        <textarea
                            rows="5"
                            cols="40"
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                        />

                        <br /><br />

                        <input
                            type="text"
                            value={image}
                            onChange={(e) =>
                                setImage(e.target.value)
                            }
                        />

                        <br /><br />

                        <button type="submit">

                            Update Book

                        </button>

                    </form>

                </div>

            </div>

        </>

    );

}

export default EditBook;