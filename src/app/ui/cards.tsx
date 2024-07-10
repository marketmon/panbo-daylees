'use client'

// components/Card.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { ChecklistItem, Card as CardType } from '@/app/lib/definitions';

interface CardProps {
    card: CardType;
    updateCard: (cardId: number, description: string) => void;
    updateChecklistItem: (cardId: number, itemId: number, content: string) => void;
    toggleChecklistItem: (cardId: number, itemId: number) => void;
    addChecklistItem: (cardId: number, content: string) => void;
    deleteChecklistItem: (cardId: number, itemId: number) => void;
}

const Card: React.FC<CardProps> = ({
    card,
    updateCard,
    updateChecklistItem,
    toggleChecklistItem,
    addChecklistItem,
    deleteChecklistItem
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState(card.description);
    const [newChecklistItem, setNewChecklistItem] = useState('');

    const handleConfirm = () => {
        updateCard(card.id, description);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setDescription(card.description);
        setIsEditing(false);
    };

    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div>
                <Image
                    width={300}
                    height={300}
                    className="object-cover"
                    src="https://picsum.photos/id/237/300/300"
                    alt="Card image"
                />
            </div>
            <div className="p-8">
                {isEditing ? (
                    <>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full mb-4 p-2 border border-gray-300 rounded"
                        />
                        <button onClick={handleConfirm} className="mr-2 px-4 py-2 bg-green-500 text-white rounded">Confirm</button>
                        <button onClick={handleCancel} className="px-4 py-2 bg-red-500 text-white rounded">Cancel</button>
                    </>
                ) : (
                    <>
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Description</div>
                        <p className="mt-2 text-gray-500">{description}</p>
                        <button onClick={() => setIsEditing(true)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Edit</button>
                    </>
                )}
                <div className="mt-4">
                    <ul className="list-disc list-inside">
                        {card.checklist_items.map((item) => (
                            <li
                                key={item.id}
                                className={`text-gray-700 cursor-pointer ${item.is_checked ? 'line-through' : ''}`}
                                onClick={() => toggleChecklistItem(card.id, item.id)}
                            >
                                <input
                                    type="text"
                                    value={item.content}
                                    onChange={(e) => updateChecklistItem(card.id, item.id, e.target.value)}
                                    className="mr-2"
                                    readOnly={!isEditing}
                                />
                                {isEditing && <button onClick={() => deleteChecklistItem(card.id, item.id)} className="ml-2 text-red-500">Delete</button>}
                            </li>
                        ))}
                    </ul>
                    {isEditing && (
                        <>
                            <input
                                type="text"
                                value={newChecklistItem}
                                onChange={(e) => setNewChecklistItem(e.target.value)}
                                className="w-full mt-2 p-2 border border-gray-300 rounded"
                            />
                            <button onClick={() => {
                                addChecklistItem(card.id, newChecklistItem);
                                setNewChecklistItem('');
                            }} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add Item</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;