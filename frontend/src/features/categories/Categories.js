import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LessonTemplate from "../../components/LessonTemplate";
import SpinnerTemplate from "../../components/SpinnerTemplate";
import { getCategories } from "./categoriesSlice";

export default function Categories() {
  const dispatch = useDispatch();
  const { category, status } = useSelector((state) => state.categories);
  const allQuiz = category.quizzes;

  useEffect(() => {
    dispatch(getCategories());
  }, [ dispatch ]);

  const CategoriesDetails = () => {
    if(status === 'loading' || status === null) {
      return (
        <SpinnerTemplate />
      );
    } else {
      return (
        <>
          {
            allQuiz.map((quiz) => (
              <LessonTemplate
                key={quiz.id}
                title={quiz.title}
                text={quiz.description}
                route={`/categories/${quiz.id}`}
              />
            ))
          }
        </>
      );
    }
  };

  return (
    <CategoriesDetails />
  );
};
