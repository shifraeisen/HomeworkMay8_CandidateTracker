using HomeworkMay8_CandidateTracker.Data;
using HomeworkMay8_CandidateTracker.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HomeworkMay8_CandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private readonly string _connectionString;

        public CandidatesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpPost("Add")]
        public void AddCandidate(Candidate c)
        {
            var repo = new CandidateRepository(_connectionString);
            c.Status = Status.Pending;
            repo.AddCandidate(c);
        }
        [HttpGet("GetCounts")]
        public List<int> GetCounts()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCounts();
        }
        [HttpGet("GetAllByStatus")]
        public List<Candidate> GetByStatus(char s)
        {
            var status = s == 'c' ? Status.Confirmed : s == 'd' ? Status.Declined : Status.Pending;
            var repo = new CandidateRepository(_connectionString);
            var list  = repo.GetAllByStatus(status);
            return repo.GetAllByStatus(status);
        }
        [HttpGet("GetByID")]
        public Candidate GetById(int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidateById(id);
        }
        [HttpPost("Decision")]
        public void Decision(DecisionModel m)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.Decision(m.D, m.Id);
        }
    }
}
