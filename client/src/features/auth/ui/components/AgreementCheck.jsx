const AgreementCheck = ({ register, errors }) => {
  return (
    <div className='mb-4 flex w-full items-start gap-2'>
      <input
        type='checkbox'
        className='accent-primary'
        {...register("agreement", {
          required: "You must accept the terms",
        })}
      />

      <div>
        <p className='text-xs leading-5 text-neutral-400 -mt-1'>
          I agree to receive communications from Sheryians Coding School via
          WhatsApp, SMS, email, and phone calls, even if registered under
          DND/NDNC.
        </p>

        {errors.agreement && (
          <p className='mt-1 text-xs text-red-500'>
            {errors.agreement.message}*
          </p>
        )}
      </div>
    </div>
  )
}

export default AgreementCheck
