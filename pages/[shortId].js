export default function ShortIdPage () {
  return <div>ShortID Redirect</div>
}


export async function getServerSideProps ({ params }) {
  const { shortId } = params

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ code: shortId })
  };

  try {
    const result = await fetch(`${process.env.URL_BASE}/api/getCodeUrl`, payload);
    const { longLink } = await result.json();

    if (!longLink) {
      return {
        redirect: { destination: '/' }
      }
    }

    return {
      redirect: {
        destination: longLink
      }
    }
  } catch (error) {
    return {
      redirect: { destination: '/' }
    }
  }
}
