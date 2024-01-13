import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
// provides the ability to attach events and value into the component
// to use RTE in another components
// "control" has the responsibility to share this component as a form in another place

export default function RTE({name , control ,label, defaultValue = ""}) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>} 
            <Controller 
            name={name || "content"}
            control={control}
            render={({field : {onChange}}) => (
                // element to be rendered 
                <Editor
                initialValue={defaultValue}
                init={{
                    initialValue: defaultValue,
                    height: 500,
                    menubar: true,
                    plugins: [
                        "image",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                        "anchor",
                    ],
                    toolbar:
                    "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                }}
                onEditorChange={onChange}
                />
            )}
            />
        </div>
    );
}
