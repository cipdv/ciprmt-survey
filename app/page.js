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
              className="p-2 rounded"
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
            I'm considering offering yoga classes for beginners for anyone who
            feels intimadated by yoga classes because they feel inflexible and
            unable to get into the postures required in the class. These classes
            would focus on teaching yoga postures in a more relaxed and less
            intimidating environment.
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
            I'm considering offering workplace massage days where I would come
            to your workplace and offer 30 minute massages to employees. Many
            workplaces are now offering massage days as a way to help employees
            manage stress and relieve tension.
          </p>
          <div>
            <input
              type="radio"
              id="workplaceMassageYes"
              name="workplaceMassage"
              value="yes"
              required
            />
            <label htmlFor="workplaceMassageYes">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              id="workplaceMassageNo"
              name="workplaceMassage"
              value="no"
              required
            />
            <label htmlFor="workplaceMassageNo">No</label>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="stretchClasses" className="text-bold">
            Would you still be able to receive massages with the following rate
            increases?
          </label>
          <p className="mb-4 mt-2">
            I have always tried to keep my rates low, and I’ll continue to keep
            them low. Since beginning my massage practice I have absorbed the
            cost of HST, but with rising costs, I do feel the need to raise my
            rates for 2024, but I would still like to maintain my rates below
            the average recommended massage rates for the area so that my
            massage services are accessible to most people. This is what I am
            proposing for July 2024:
          </p>
          <ul className="ml-4">
            <li>$70 +HST for 30 minutes ($79.10)</li>
            <li>$115 +HST for 60 minutes ($129.95)</li>
            <li>$135 +HST for 75 minutes ($152.55)</li>
            <li>$155 +HST for 90 minutes ($175.15)</li>
          </ul>
          <p className="mt-4">
            Please let me know how these rates will affect your ability to
            receive massage from me:
          </p>
          <div className="ml-4 mt-4 mb-4">
            <div>
              <input
                type="radio"
                id="yes"
                name="rateIncrease"
                value="noChange"
                required
              />
              <label htmlFor="noChange">
                I will still come as often as I currently do
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                name="rateIncrease"
                value="lessOften"
                required
              />
              <label htmlFor="lessOften">
                I would not be able to come as often as I currently do, or I
                would come for shorter massages
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                name="rateIncrease"
                value="noLongerCome"
                required
              />
              <label htmlFor="noLongerCome">
                I would no longer be able to come for massages
              </label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="haircut" className="text-bold">
            Should I cut my hair?
          </label>
          <p className="mt-2">Joke question, but real answers please ;)</p>
          <div className="ml-4 mt-4 mb-4">
            <div>
              <input
                type="radio"
                id="yes"
                name="haircut"
                value="yes"
                required
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div>
              <input type="radio" id="no" name="haircut" value="no" required />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="comments" className="text-bold">
            Comments and feedback
          </label>
          <p className="mt-2">
            Please let me know if you have any other comments or feedback about
            my services, or any of the above proposals that you would like to
            share.
          </p>
          <div className="mt-2 mb-4">
            <textarea
              id="comments"
              name="comments"
              placeholder="Enter your comments here"
              className="p-2 rounded w-full h-32"
            ></textarea>
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
