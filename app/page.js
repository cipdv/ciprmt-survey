"use client";

import { submitSurvey } from "@/app/_actions";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className="btn w-2/5 ">
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

const survey = () => {
  const [state, formAction] = useFormState(submitSurvey, initialState);

  return (
    <form
      action={formAction}
      className="p-4 rounded-md mt-6 w-full lg:w-2/5 mx-auto mx-6"
    >
      <div className="flex flex-col gap-3 glassmorphism mt-4">
        <h1 className="text-bold text-lg">
          Cip de Vries, RMT: June 2024 Survey
        </h1>
        <div>
          <label htmlFor="name" className="text-bold">
            Email
          </label>
          <div className="mt-2 mb-4">
            <input
              type="text"
              id="email"
              name="email"
              required
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div>
          <label htmlFor="onlineBooking" className="text-bold">
            Would you like to see online booking on my new website?
          </label>
          <div className="ml-4 mt-4 mb-4">
            <div>
              <input
                type="radio"
                id="yes"
                name="onlineBooking"
                value="yes"
                required
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                name="onlineBooking"
                value="no"
                required
              />
              <label htmlFor="no">No</label>
            </div>
            <div>
              <input
                type="radio"
                id="indifferent"
                name="onlineBooking"
                value="indifferent"
                required
              />
              <label htmlFor="indifferent">Indifferent</label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="stretchClasses" className="text-bold">
            Would you be interested in yoga classes for beginners?
          </label>
          <p className="mb-4 mt-2">
            Many people feel intimadated by yoga classes because they feel
            inflexible and unable to get into the postures required in the
            class, so I'm considering offering stretching classes for beginners.
            These classes would focus on teaching yoga postures in a more
            relaxed and less intimidating environment.
          </p>
          <div className="ml-4">
            <div>
              <input
                type="radio"
                id="yes"
                name="stretchClasses"
                value="yes"
                required
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                name="stretchClasses"
                value="no"
                required
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="stretchClasses" className="text-bold">
            Do you think your workplace would be interested in workplace massage
            days?
          </label>
          <p className="mb-4 mt-2">
            Many workplaces are now offering massage days as a way to help
            employees manage stress and relieve tension. I'm considering
            offering workplace massage days where I would come to your workplace
            and offer 30 minute massages to employees.
          </p>
          <div className="ml-4">
            <div>
              <input
                type="radio"
                id="yes"
                name="workplaceMassage"
                value="yes"
                required
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                name="workplaceMassage"
                value="no"
                required
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
        {state?.message && (
          <p className="text-error text-bold">{state?.message}</p>
        )}
        <SubmitButton />
      </div>
    </form>
  );
};

export default survey;
